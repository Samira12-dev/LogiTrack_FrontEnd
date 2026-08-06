

export default function EditProfile() {
    return (
        <div className="edit-profile-page">

            <div className="edit-profile-card">

                <div className="edit-profile-header">
                    <h2>Edit Profile</h2>
                    <p>Update your personal information</p>
                </div>

                <form className="edit-profile-form">

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="nom">Last Name</label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                placeholder="Enter your last name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="prenom">First Name</label>
                            <input
                                type="text"
                                id="prenom"
                                name="prenom"
                                placeholder="Enter your first name"
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <input
                            type="text"
                            id="role"
                            value="ADMIN"
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            New Password <small>(Optional)</small>
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Leave empty to keep your current password"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password <small>(Optional)</small>
                        </label>

                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your new password"
                        />
                    </div>

                    <div className="form-actions">

                        <button
                            type="button"
                            className="cancel-btn"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}