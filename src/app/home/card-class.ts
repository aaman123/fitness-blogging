export class Card {
    constructor(
        private image: string,
        private title: string,
        private text: string,
        private link: string,
    ) {}

    public get_image(): string {
        return this.image;
    }

    public get_title(): string {
        return this.title;
    }

    public get_text(): string {
        return this.text;
    }

    public get_link(): string {
        return this.link;
    }
}