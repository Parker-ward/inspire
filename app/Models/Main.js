export class Main {

  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.largeUrl = data.largeUrl
    this.content = data.content
    this.author = data.author
    this.currentTime = data.currentTime || new Date().toLocaleTimeString()
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

  // get time() {
  //   return `
  //   <h1>${this.currentTime}</h1>
  //   `
  // }

  // FIXME need to put an on hover to get author
}