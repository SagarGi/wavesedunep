import React from 'react'
import './FreeCounselling.css'

const Modal = () => 
{
    return(
        <div>
                <div class="modal fade text-center" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div className="modal-header">
                            <h3>Thank You!!</h3>
                        </div>
                        <div class="modal-body">
                        <p>Your mail has been sent!! We will contact you soon....</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
        </div>
    )
    
}

export default Modal