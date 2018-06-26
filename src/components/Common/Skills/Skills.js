import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div class="form-group  row">
                            <label for="skills" class="col-sm-2 col-form-label">Skills</label>
                            <div class="col-sm-10">
                                <select name="skill">
                                    <option value="none"></option>
                                    <option value="java">java</option>
                                    <option value="Angular js">AngularJs</option>
                                    <option value="React">React</option>
                                </select>
                            </div>
                        </div>
    
        );
    }
}

export default Skills;