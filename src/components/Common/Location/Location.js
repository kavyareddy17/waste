import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div class="form-group  row">
                            <label for="location" class="col-sm-2 col-form-label">Location</label>
                            <div class="col-sm-10">
                                <select name="loc">
                                    <option value="none"></option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Chennai">Chennai</option>
                                </select>
                            </div>
                        </div>
                         );
    }
}

export default Location;
