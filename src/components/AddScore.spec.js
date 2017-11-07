import React from 'react'
import { shallow } from 'enzyme'

import AddScore from './AddScore'

const setup = (setupProps = {}) => {
  const defaultProps = {
    playerName: 'Test Name',
    winner: '',
    onScoreClick: jest.fn()
  }
  const props = { ...defaultProps, ...setupProps }

  const wrapper = shallow(
    <AddScore
      playerName={props.playerName}
      winner={props.winner}
      onScoreClick={props.onScoreClick}
    />
  )

  return {
    props,
    wrapper
  }
};


describe('AddScore', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })

  // test('disabled the button when winner is empty', () => {
  //   const { wrapper } = setup({ winner: '' })
  //
  //   expect(wrapper).toMatchSnapshot()
  // })

  test('calls onScoreClick when clicked', () => {
    const { props, wrapper } = setup()
    expect(wrapper).toMatchSnapshot()

    wrapper.find('button').simulate('click')
    expect(props.onScoreClick).toHaveBeenCalled()
  })
})
