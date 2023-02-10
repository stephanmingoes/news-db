import { Injectable } from '@nestjs/common';
import { Article, EnvironmentVariables } from '../types';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Utilities {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  async getAritcles(): Promise<Article[]> {
    try {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const currentDate = new Date();
      const before = currentDate.toISOString().split('T')[0];
      const after = oneWeekAgo.toISOString().split('T')[0];
      const response = await axios.get(
        'https://app.zenserp.com/api/v2/search',
        {
          headers: {
            apikey: this.configService.get('ZENSERP_API_KEY'),
          },
          params: {
            q: `site:jamaicaobserver.com OR site:jamaica-gleaner.com OR site:loopjamaica.com OR site:jamaicastar.com OR site:nationwidenews.net OR site:rjrnewsonline.com OR site:tvj.com OR site:power106news.com OR site:iriefm.net before:${before} and after:${after}`,
            tbm: 'nws',
            search_engine: 'google.com.jm',
            location: 'Jamaica',
            gl: 'JM',
            hl: 'en',
          },
        },
      );
      const returnVal: Article[] = response.data.news_results.map(
        (data: Article) => ({
          title: data.title,
          link: data.link,
          source: data.source,
          description: data.description,
          thumbnail: data.thumbnail,
          date_parsed: data.date_parsed,
        }),
      );
      return returnVal;
    } catch (error) {
      throw error;
    }
  }
}
