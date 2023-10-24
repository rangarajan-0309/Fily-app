import React from 'react';
import { useSignupStore } from './store';
import { signupFields } from '../constants/formFields';
import FormAction from './formAction';
import Input from './input';

const fields = signupFields;

const Signup: React.FC = () => {
    const { signupState, setSignupState, createAccount } = useSignupStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSignupState({ ...signupState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        createAccount();
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id] || ''}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
        </form>
    );
};

export default Signup;