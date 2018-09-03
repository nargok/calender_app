class CustomDate {
  constructor(...args) {
    const date = args.length === 1 ? args[0] : new Date(...args)
    console.log(date)
    this.year = date.getFullYear()
    this.month = date.getMonth()
    this.date = date.getDate()
    this.day = date.getDay()
  }

  formatDate(separator = '/') {
    return [this.year, this.manth + 1, this.date].join(separator)
  }
}

export default CustomDate;