export const Form = ()=>{
    return (
        <form>
            <div>
                <label htmlFor="task"></label>
                <input 
                    type='text'
                    name='task'
                    id='task'
                    placeholder="O que você deseja estudar"
                    required
                />
            </div>
            <div>
                <label htmlFor="task"></label>
                <input 
                    type='time'
                    step='1'
                    name='time'
                    id='time'
                    min='00:01:00'
                    max='05:00:00'
                    required
                />
            </div>
        </form>
    )
}