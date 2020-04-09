import React from "react";

const DashInfo = () => {
  return (
    <div className="card mt-4">
      <div className="card-header text-dark">Starter Guidelines</div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-danger">
            We suggest to first complete your profile data after you have signed
            in for the first time. Please add your profile photo and change your
            profile username before adding/creating your first hugot line.
          </li>
          <li className="list-group-item text-info">
            For profile completeness, we suggest to add your social media
            accounts/links so when going to your profile page, you can have a
            more complete profile. Not adding any links/accounts will be showing
            empty on your profile bar.
          </li>
          <li className="list-group-item">
            No nude photos allowed. If we find users posting using nude photos,
            admin will take down the post and disallow users to continue this
            app.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashInfo;
