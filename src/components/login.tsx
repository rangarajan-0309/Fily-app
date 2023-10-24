import React, { FormEvent } from 'react';
import { useAuthStore } from './store';
import { loginFields } from '../constants/formFields';
import FormAction from './formAction';
import FormExtra from './formExtra';
import Input from './input';

const Login: React.FC = () => {
    const { loginState, setLoginState, authenticateUser } = useAuthStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        authenticateUser();
    };

    const fields = loginFields;

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id] || ''}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
    );
};

export default Login;