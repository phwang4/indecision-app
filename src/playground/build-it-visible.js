class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.onToggleDetails = this.onToggleDetails.bind(this)
        this.state = {
            show: true
        }
    }
    onToggleDetails() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }
    render() {

        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggleDetails}>
                    {this.state.show ? 'Show details' : 'Hide details'}
                </button>
                {!this.state.show && (
                    <p>Hey. These are some details you can now see!</p>
                )}
                
            </div>
        )

    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app')
// let show = true
// let text = ''
// const onToggleDetails = () => {
//     console.log(show)
    // if (show) {
    //     text = 'Hey. These are some details you can now see!'
    //     show = !show
    // } else {
    //     text = ''
    //     show = !show
    // }
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleDetails}>
//                 {show ? 'Show details' : 'Hide details'}
//             </button>
//             <p>{text}</p>
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot)
// }
// render()

