import React from 'react'
import './writer.css'

const options = ['Register Please'];
class Typewriter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            currentItemIndex: 0
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this.type(this.state.currentItemIndex);
    }

    type = (currentItemIndex) => {
        this._isMounted && this.setState({ currentItemIndex }, () => {
            this.show(options[currentItemIndex]);
        });
    }

    show = (target) => {
        let charCount = 0;
        this.timer = setInterval(() => {
            this._isMounted && this.setState({ text: target.substr(0, charCount) }, () => {
                if(charCount === target.length ) {
                    clearInterval(this.timer);
                    setTimeout(() => this.hide(target), 2500);
                }
                charCount++;
            });
        },250);
    }

    hide = (target) => {
        let charCount = target.length;
        this.timer = setInterval(() => {
            this._isMounted && this.setState({ text: target.substr(0, charCount) }, () => {
                if( charCount === 0 ) {
                    clearInterval(this.timer);
                    let currentItemIndex = this.state.currentItemIndex + 1;
                    if(currentItemIndex === options.length) currentItemIndex = 0 ;
                    setTimeout(() => this.type(currentItemIndex), 1000);
                }
                charCount--;
            });
        },250);
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.timer)
    }

    render() {
        const {text} = this.state;
        return (
            <div className="typewriter">
                <div className="typewriter__type">
                    {text.length > 0 ? "":"Hello"}{text}
                </div>
                <div className="typewriter__cursor"/>
            </div>
        );
    }
}
export default Typewriter
