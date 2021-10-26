
import { useEffect, useState } from "react";

import { useTranslation } from 'next-i18next';

import { Form, Input } from 'components/antd';
import { Text, Submit } from 'utilsCmp/Field';

const layout = {
    labelCol: {
        span: 30,
    },
    wrapperCol: {
        span: 45,
    }
};

const validateMessages = {
    types: {
        email: '${name} is not a valid email!',
    }
};
export default function EmailUs (){

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log(values);
    };

    const { t } = useTranslation('footer')

    return (
        <Form className="mail-us"
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
              form={form}
        >
            <Text name={'email'}
                  rules={[{type: 'email', required: true, message: t('email-message') }]}
                  placeholder={t('email-placeholder')}
                  hasFeedback={false}
            />
            <Form.Item
                name="introduction"
                rules={[
                    {
                        required: true,
                        message: t('introduction-message')
                    }
                ]}
            >
                <Input.TextArea
                    placeholder={t('message-placeholder')}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Submit
                        label={t('send-Button')}
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    />
                )}
            </Form.Item>
        </Form>
    );
}