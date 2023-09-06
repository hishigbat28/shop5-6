import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Цагаан сандал',
          img: 'whitechair.webp',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'chairs',
          price: '69.00',
        },
        {
          id: 2,
          title: 'Ширээ',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'tables',
          price: '17.99',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'sofa',
          price: '97.99',
        },
        {
          id: 4,
          title: 'Ламп',
          img: 'light.webp',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'light',
          price: '35.00',
        },
        {
          id: 5,
          title: 'Цагаан ширээ',
          img: 'whitetable.webp',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'tables',
          price: '26.99',
        },
      ],
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
    // console.log(id)
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true
    })
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App
