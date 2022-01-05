import React from 'react';
import './index.css';

interface RotateCardProp {
    title: string,
    msg: string,
    content: string
}

interface RotateCardState {
    status: boolean
}

export default class RotateCard extends React.Component<RotateCardProp, RotateCardState> {
    constructor(props: RotateCardProp) {
        super(props);
        this.state = {
            status: false
        };

        this.onCardClick = this.onCardClick.bind(this);
    }

    onCardClick() {
        this.setState((state) => {
            return { status: !state.status };
        })
    }

    render() {
        function getContent(status: boolean, props: RotateCardProp) {
            return '';
            // return status
            //     ? <div className="content">{props.content}</div>
            //     : <React.StrictMode>
            //         <div className="title">{props.title}</div>
            //         <div className="msg">{props.msg}</div>
            //     </React.StrictMode>
        }
        return <React.StrictMode>
            <div className={["rotate-card", this.state.status ? 'rotated' : ''].join(' ')} onClick={this.onCardClick}>
                {getContent(this.state.status, this.props)}
            </div>
        </React.StrictMode>
    }

    componentDidMount() { }

    componentDidUpdate() { }

    componentWillUnmount() { }
};