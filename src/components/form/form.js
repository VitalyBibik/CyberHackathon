import React from 'react';
import { Field, Formik } from 'formik';
import styles from './form.module.scss';
import { CreateAndValidate } from '../../utils/validation';


const Form = () => {

    return (
        <Formik
            initialValues={{
                fullName: '',
                mobilePhone: '',
                email: '',
                userText: '',
                checked: [],
            }}
            validate={(values) => {
                return CreateAndValidate(values);
            }}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        className={styles['form__input']}
                        type="text"
                        name="userText"
                        placeholder="Введите ваш запрос"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userText}
                        required
                    />
                    {errors.userText && touched.userText && errors.userText && (
                        <span className={styles['form__error']}>{errors.userText}</span>
                    )}
                    <label className={styles['form__check']}>
                        <Field
                            type="checkbox"
                            name="toggle"
                            className={styles['form__ellipse']}
                            required
                        />
                        <span className={styles['form__span']}/>
                        {
                            <p className={styles['form__text']}>
                                Согласен с &#160;
                                <a href={'/'} className={styles['form__link']}>
                                    офертой
                                </a>
                            </p>
                        }
                    </label>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles['form__button']}
                    >
                        Отправить форму
                    </button>
                </form>
            )}
        </Formik>
    );
}
export default Form;
