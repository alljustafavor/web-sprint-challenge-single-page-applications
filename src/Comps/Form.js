
const Form = props => {

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {/* DROPDOWN */}
            <div className="size-dropdown">
                <h2>Choice of Size</h2>
                <label>Choice of Size
                    <select
                        onChange={handleChange}
                        // value={values.size}
                        name='size'
                    >
                        <option value=''>- Select an Size -</option>
                        <option value='8in'>8 Inch</option>
                        <option value='10in'>10 Inch</option>
                        <option value='12in'>12 Inch</option>
                        <option value='14in'>14 Inch</option>
                    </select>
                </label>
            </div>
            {/* Radio Btns */}

            <div className="sauce-radio">
                <h2>Choice of Sauce</h2>
                <label>Original Red
                    <input 
                        name='sauce'
                        value='original'
                        type='radio'
                        data-cy="original"
                        onChange={handleChange}
                        // checked={values.sauce === 'original'}
                    />
                </label>
                <label>Garlic Ranch
                    <input 
                        name='sauce'
                        value='garlic'
                        type='radio'
                        data-cy="garlic"
                        onChange={handleChange}
                        // checked={values.sauce === 'garlic'}
                    />
                </label>
                <label>BBQ sauce
                    <input 
                        name='sauce'
                        value='BBQ'
                        type='radio'
                        data-cy="BBQ"
                        onChange={handleChange}
                        // checked={values.sauce === 'BBQ'}
                    />
                </label>
                <label>Alfredo
                    <input 
                        name='sauce'
                        value='alfredo'
                        type='radio'
                        data-cy="alfredo"
                        onChange={handleChange}
                        // checked={values.sauce === 'alfredo'}
                    />
                </label>
            </div>
            {/* CHECKBOX */}
            <div className="topping-checkbox">
                <label>Pepperoni
                    <input 
                        name='pepperoni'
                        type='checkbox'
                        // checked={values.pepperoni}
                        onChange={handleChange}
                    />
                </label>
                <label>Sausage
                    <input 
                        name='sausage'
                        type='checkbox'
                        // checked={values.sausage}
                        onChange={handleChange}
                    />
                </label>
                <label>Bacon
                    <input 
                        name='bacon'
                        type='checkbox'
                        // checked={values.bacon}
                        onChange={handleChange}
                    />
                </label>
                <label>Grilled Chicken
                    <input 
                        name='chicken'
                        type='checkbox'
                        // checked={values.chicken}
                        onChange={handleChange}
                    />
                </label>
                <label>Green Pepper
                    <input 
                        name='greenPepper'
                        type='checkbox'
                        // checked={values.greenPepper}
                        onChange={handleChange}
                    />
                </label>
                <label>Extra Cheese
                    <input 
                        name='exCheese'
                        type='checkbox'
                        // checked={values.exCheese}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="special-instructions">
                <h4>Special Instructions</h4>
                <label>
                    <input 
                        type='text'
                        name='special'
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button>Add To Order</button>
        </form>
    )
}

export default Form

