class User{
    /**
     * Create a userProp
     * @param nick
     * @param fullname
     * @param address
     * @param country
     * @param phone
     */
    constructor({ nick='', fullname='', address='', country='', phone='' }) {
        this.nick = nick
        this.fullname = fullname
        this.address = address
        this.country = country
        this.phone = phone
    }

    /**
     * Compute firstName
     * @returns {string}
     */
    firstName(){
        let [fName,] = this.fullname.split(" ")
        fName = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase()
        return fName
    }

    /**
     * Compute lastName
     * @returns {string}
     */
    lastName(){
        let [, ...second] = this.fullname.trim().split(" ")
        second = second.join(" ")
        return second.toUpperCase()
    }

     /**
     * Compute nickname
     * @returns {string}
     */
    nickname(){
        return this.nick;
    }

    clone(){
        return new User({
            'nick': this.nick,
            'fullname': this.fullname,
            'address': this.address,
            'country': this.country,
            'phone': this.phone
        })
    }
}

export { User }