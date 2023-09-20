import { useState } from "react"
import { PizzasSizesProps } from "./PizzaButtonsOptions"

const ModalPizzasSizes = (
  { setOpenModalPizzasSizes, pizzasSizes, setCurrentPizza }:
    { setOpenModalPizzasSizes: any, pizzasSizes: PizzasSizesProps[], setCurrentPizza: any }) => {

  return (
    <div className="flex justify-center absolute top-8 w-full h-4/5" >
      <div className="bg-thirdColor text-white w-4/5 flex flex-wrap content-between">
        <table className="w-full">
          <thead className="border-b-[1px] border-white/20" >
            <tr>
              <th className="p-3">Selecione um Tamanho</th>
            </tr>
          </thead>
          <tbody>
            {pizzasSizes.map(pizza => {
              return (
                <tr
                  key={pizza.id}
                  className="border-b-[1px] border-white/20" >
                  <td className="h-8" >
                    <input
                      onClick={() => setCurrentPizza(pizza)}
                      type="radio"
                      value={pizza.name}
                      id={pizza.id}
                      name="tamanho das pizzas"
                      className="ml-2"
                    />
                    <label
                      htmlFor={pizza.id}
                      className="ml-2">{`Pizza ${pizza.name} - ${pizza.size} cm`}
                    </label>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex justify-end w-full border-t-[1px] border-white/20" >
          <button
            onClick={() => setOpenModalPizzasSizes((prev) => !prev)}
            className="w-1/2 p-3 text-lg text-end"
          >Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalPizzasSizes