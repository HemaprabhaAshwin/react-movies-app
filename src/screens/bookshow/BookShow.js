import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import Details from '../details/Details';
import './BookShow.css';
import Home from '../home/Home';

class BookShow extends Component {

    backToDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    render() {
        return(
            <div className="bookshow">
                <Header />            
                <div className="bookShow">
                    <Typography className="back" onClick={this.backToDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                </div>
            </div>
        );
    }
}

export default BookShow;