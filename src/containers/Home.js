import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import { fetch } from '../redux/actions/fetch';
import Footer from '../components/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            count: 25,
            data: {}
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })
    }

    handleFetch = (e) => {
        e.preventDefault();
        if (this.state.keyword !== '') {
            this.props.fetch(this.state.keyword, this.state.count);
            setTimeout(() => {
                this.setState({ data: Object.values(this.props.data) });
                console.log(this.state);
            }, 2000)
        }
        else return;
    }

    render() {
        return (
            <>
                <Navbar
                    keyword={this.state.keyword}
                    count={this.state.count}
                    handleChange={this.handleChange}
                    handleFetch={this.handleFetch}
                />
                <Cards
                    items={this.state.data}
                />
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        message: state.message,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch: (keyword, count) => dispatch(fetch(keyword, count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);