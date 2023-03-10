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
    <div class="text-center on-hover"><i class="mdi mdi-pinwheel mdi-spin"></i> ${this.author} <i class="mdi mdi-pinwheel mdi-spin"></i></div>
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