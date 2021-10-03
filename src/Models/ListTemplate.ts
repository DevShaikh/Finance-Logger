import HasFormatter from '../Interfaces/HasFormatter'

class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  // Render method
  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
    // Creating required elements
    const li = document.createElement('li')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')

    // Writing data in elements
    h4.innerText = heading
    p.innerText = item.format()
    li.append(h4, p)

    if (pos === 'start') {
      this.container.prepend(li)
    } else {
      this.container.append(li)
    }
  }
}

export default ListTemplate
