import React, { Component, StrictMode } from 'react'
import loading from '../img/loading.gif'


export default class Memegenerator extends Component {
    state = {
        topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [],
            isLoading: true
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    changeMeme = (e) => {
        e.preventDefault()
        //get a random number from the random img index
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        //set randomImg t the url of the random item grabbed
        this.setState({ randomImage: randMemeImg})
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                this.setState({
                     allMemeImgs: memes
                    })

            })
    }
    render() {


        return (
            <StrictMode>
                <form className='meme-form' onSubmit={this.changeMeme}>
                <input type='text' name='topText' value={this.state.topText} onChange={this.handleChange} placeholder='Top Text' /><br />
                <br />

                <input type='text' name='bottomText' value={this.state.bottomText} onChange={this.handleChange} placeholder='bottom Text' /><br />

                <button>Generate</button>
                </form>

                <center>
                    <div>
                    { this.state.isLoading ? 
                         <img src={loading} alt='pic' className='loader' /> :  this.state.isLoading === false  
                    }
                    </div>
               
                </center>
                
                <div className='meme'>
                    <img src={this.state.randomImage} alt='random meme' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </StrictMode>
        )
    }
}
