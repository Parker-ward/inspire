export class Main {

  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.largeUrl = data.largeUrl
    this.content = data.content
    this.author = data.author
  }

  get Quotes() {
    return `
    <div>
      <h1>
        ${this.content}
      </h1>
    </div>
    `
  }

  // FIXME need to put an on hover to get author
}