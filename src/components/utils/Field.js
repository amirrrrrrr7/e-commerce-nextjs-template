
import {Button, Form, Input} from "components/antd";

export function Text({ hasFeedback, dependencies, label, name, rules, inputType, placeholder, icon }) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
            hasFeedback={hasFeedback}
            dependencies={dependencies}
        >
            <Input prefix={icon} size="large" type={inputType} placeholder={placeholder}/>
        </Form.Item>
    )
}

export function Submit({ label, disabled, shouldUpdate, loading }) {
    return (
            <Button size="large"
                    type="primary"
                    htmlType="submit"
                    block
                    disabled={disabled}
                    loading={loading}
            >
                {label}
            </Button>
    )
}