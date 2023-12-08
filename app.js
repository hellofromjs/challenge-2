const input = document.querySelector('input')
const result = document.querySelector('#result')

work()

input.addEventListener('input', e => {
	work()
})

function work()
{
	if (input.value.length < 3)
	{
		result.textContent = input.value.toLocaleUpperCase()
	} else {
		const text_array = input.value.split('')

		for (let i = 0; i < 3; i++) {
			text_array[i] = text_array[i].toLocaleLowerCase()
		}

		result.textContent = text_array.join('')
	}
}