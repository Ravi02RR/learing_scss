

const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1>Contact us</h1>


                <form>
                    <div>
                        <label >Name</label>
                        <input type="text" required placeholder="Abc" />
                    </div>

                    <div>
                        <label >Email</label>
                        <input type="email" required placeholder="Abc@gmail.com" />
                    </div>


                    <div>
                        <label >Message</label>
                        <input type="text" required placeholder="Enter your message here..." />
                    </div>

                    <button type="submit">send</button>
                </form>

            </main>
        </div>
    )
}

export default Contact