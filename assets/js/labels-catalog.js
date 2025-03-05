var Catalog = {
  pagination: {
    limit: 50
  }
}

function initialize () {
  const url = new URL(window.location.href)
  const vendor = window.location.href.split('/').pop()
  const page = url.searchParams.get('page')

  Catalog.filters = { vendor }
  Catalog.pagination.page = page

  render()
}

function render() {
  
}