import Form from 'antd/es/form'
import { useForm } from 'antd/es/form/Form'
import Navbar from 'app/components/shared/Navbar'

const Registration = () => {
  const [form] = useForm()
  return (
    <>
      <Navbar />
      <Form form={form} >
        <Form.Item>

        </Form.Item>
      </Form>
    </>
  )
}

export default Registration
