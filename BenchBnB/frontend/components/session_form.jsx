import React from 'react';

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleInput(field){
        return e => this.setState({ 
            [field]: e.currentTarget.value 
        });
    }

    renderErrors(){
        const {errors} = this.props;
        return (
            <ul>
                {errors.map((error, i) => (<li key={i}>{error}</li>) )}
            </ul>
        )
    }

    render(){
        const {formType, link } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h1>{formType.toUpperCase()}</h1>
                    {link}
                    {this.renderErrors()}

                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
                    </label>

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>

                    <button>{formType}</button>
                </form>
            </div>
        )
    }
}