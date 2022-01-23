import MyContext from './MyContext';
import {Component} from "react";

export default class MyProvider extends Component {
    state = {
        policies: [1],
        showSplash: false,
        isLoading: false,
        learnMorePolicy: false
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    policies: this.state.policies,
                    learnMorePolicy: this.state.learnMorePolicy,
                    isLoading: this.state.isLoading,
                    showSplash: this.state.showSplash,
                    togglePolicySelected: id =>{
                        const policies = this.state.policies;
                        if (policies.includes(id)) {
                            this.setState({
                                ...this.state,
                                policies: policies.filter((i) => (i !== id))
                            });
                        } else {
                            this.setState({
                                ...this.state,
                                policies: [...policies, id]
                            });
                        }
                    },
                    addPolicy: id => {
                        const policies = this.state.policies;
                        this.setState({
                            ...this.state,
                            policies: [...policies, id]
                        });
                    },
                    removePolicy: id => {
                        const policies = this.state.policies;
                        this.setState({
                            ...this.state,
                            policies: policies.filter((i) => (i !== id))
                        });
                    },
                    setLearnMorePolicy: val => {
                        this.setState({
                            ...this.state,
                            learnMorePolicy: val
                        });
                    },
                    setIsLoading: val => {
                        this.setState({
                            ...this.state,
                            isLoading: val
                        });
                    },
                    setShowSplash: val => {
                        this.setState({
                            ...this.state,
                            showSplash: val
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
