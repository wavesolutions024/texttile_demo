import "./Button.scss"

const Button = ({text}) => {
  return (
    <>
    <div class="button">
        <p class="first_button">
            {text ? text: "Let's Shop Now"}
        </p>

        <p class="second_btn">
   {text ? text: "Let's Shop Now"}
        </p>
    </div>
    </>
  )
}

export default Button