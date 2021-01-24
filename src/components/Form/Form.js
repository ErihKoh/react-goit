import { Component } from 'react';
import s from './Form.module.css';


class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        licence: false,
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);

        this.reset()
    };

    handleLicenceChange = e => {
        console.log(e.currentTarget.checked);
        this.setState({ licence: e.currentTarget.checked });
    };

    reset = () => {
        this.setState({
        name: '',
        tag: '',
    })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.form}>
                <label className={s.labelName}>
                    Name
                     <input
                        className={s.inputName}
                        autoComplete="off"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label className={s.labelTag}>
                    Nickname
                     <input
                        className={s.inputTag}
                        autoComplete="off"
                        type="text"
                        name="tag"
                        value={this.state.tag}
                        onChange={this.handleChange}
                    />
                </label>

                <p>Ваш уровень разработчика</p>
                <label>
                    <input type="radio"
                        name="experience"
                        value="junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'junior'}
                    />
                    junior
                </label>
                <label>
                    <input type="radio"
                        name="experience"
                        value="midle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'midle'}
                    />
                    midle
                </label>
                <label>
                    <input type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'senior'}
                    />
                    senior
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="licence"
                        onChange={this.handleLicenceChange}
                        checked={this.state.licence}   
                    /> 
                    Готов работать за еду
                </label>
                <button
                    className={s.btnSubmit}
                    type="submit"
                    disabled={!this.state.licence}
                >Send
                    </button>
            </form>
        )
    }
}

export default Form;