import { Collapse } from 'antd'

const FAQ = () => {
  return (
    <section className='mt-10 p-4 lg:px-16'>
      <h2 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl mb-4'>Soalan Lazim</h2>
      <Collapse defaultActiveKey={[]}>
        <Collapse.Panel header="Apa itu D'Bendang?" key="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. Quae cum dixisset, finem ille. Duo Reges: constructio interrete. Quae cum essent dicta, discessimus. Quae cum dixisset, finem ille. Duo Reges: constructio interrete. Quae cum essent dicta, discessimus.
        </Collapse.Panel>
        <Collapse.Panel header="Di mana D'Bendang akan berlangsung?" key="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. Quae cum dixisset, finem ille. Duo Reges: constructio interrete. Quae cum essent dicta, discessimus. Quae cum dixisset, finem ille. Duo Reges: constructio interrete. Quae cum essent dicta, discessimus.
        </Collapse.Panel>
        <Collapse.Panel header="Bagaimana cara mendaftar sebagai peserta acara-acara D'Bendang?" key="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. Quae cum dixisset, finem ille. Duo Reges: constructio interrete. Quae cum essent dicta, discessimus. Quae cum dixisset, finem ille. Duo Reges: constructio interrete. Quae cum essent dicta, discessimus.
        </Collapse.Panel>
      </Collapse>
    </section>
  )
}

export default FAQ
