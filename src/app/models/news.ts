// export interface News {
//     author: string;
//     content: string;
//     description: string;
//     publishedAt: string;
//     source: any[];
//     title: string;
//     url: string;
//     urlToImage: string;
        
// };

export class News {
    constructor(
        public author: string,
        public content: string,
        public description: string,
        public publishedAt: string,
        public source: string,
        public title: string,
        public url: string,
        public urlToImage: string,

    ) {}
  }