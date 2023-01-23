import React from 'react';

import { Button, Space, Checkbox, Form, Input, Row, Col, Card } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="logo">
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Col xs={20} md={7}>
          <Card
            title="Login "
            style={{
              width: 400,
            }}
          >
            <Form
              justify="center"
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 13,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <span className="frame1-text">
                  <span></span>
                </span>
                <p class="frame1-text"></p>
                <a href="/register.js" class="form__link">
                  Forgot Password?
                </a>
              </Form.Item>
              {/* <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox> */}
              {/* </Form.Item> */}
            </Form>

            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 18,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            {/* </Form> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
//     <div>
//       <form action="">
//         <div>
//           <label htmlFor="email">Email</label>{' '}
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <input type="text" name="email" id="email" />
//         </div>
//         <br></br>
//         <div>
//           <label htmlFor="passw">Password</label>&nbsp;
//           <input type="text" name="passw" id="passw" />
//         </div>
//         <br></br>
//         {/* <button type="submit">Login</button> */}
//         <Space wrap>
//           <Button>Login</Button>
//         </Space>
//       </form>
//     </div>
//   );
// };
// export default Login;
