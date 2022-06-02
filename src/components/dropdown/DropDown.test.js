import userEvent from "@testing-library/user-event";
import { screen, render } from '@testing-library/react'
import { DropDown } from "./DropDown";

const title = 'Selecione o Pokémon'
const options = ['Bulbasaur', 'Squirtle', 'Charmander']

describe('DropDown', () => {
  it('Should start closed', () => {
    render(
      <DropDown 
        title={title} 
        options={options}
        onSelect={() => {}} 
      />
    )
    expect(screen.queryByText(options[0])).not.toBeInTheDocument()
  })
  it('Should show options when open', () => {
    render(
      <DropDown 
        title={title} 
        options={options}
        onSelect={() => {}} 
      />
    )
    expect(screen.queryByText(options[0])).not.toBeInTheDocument()

    const dropDownButton = screen.getByRole('button', { name: title})
    userEvent.click(dropDownButton)
    expect(screen.getByRole('menuitem', {name: options[0]})).toBeInTheDocument()
  })
  it('Should signal an options was selected and close the menu dropdown', () => {
    const onSelect = jest.fn();
    render(
      <DropDown 
        title={title} 
        options={options}
        onSelect={onSelect}
      />
    )
    userEvent.click(screen.getByRole('button', { name: title }))

    const option01 = screen.getByRole('menuitem', { name: options[1]})
    expect(option01).toBeInTheDocument()
    
    userEvent.click(option01)
    
    expect(onSelect).toHaveBeenCalledWith(options[1])
    expect(screen.queryByText(options[1])).not.toBeInTheDocument()
  })
}) 