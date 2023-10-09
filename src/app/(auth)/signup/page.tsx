"use client";

import {Field, Form, Formik} from "formik";

export default function Page(){
    return (
        <div>
            <h1>Sign Up</h1>
            <div className="text-gray-950">
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    onSubmit={async (values) => {
                        await fetch('/api/register', {
                            method: 'POST',
                            body: JSON.stringify(values),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                    }}
                >
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="Jane" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Doe" />

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}