class CustomDate {
  constructor(...args) {
    const date = args.length === 1 ? args[0] : new Date(...args)
    this.year = date.getFullYear()
    this.month = date.getMonth()
    this.date = date.getDate()
    this.day = date.getDay()
  }

  formatDate(separator = '/') {
    return [this.year, this.month + 1, this.date].join(separator)
  }
  formatMonth(separator = '/') {
    return [this.year, this.month + 1].join(separator)
  }
}

export default CustomDate;