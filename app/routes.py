from flask import render_template, make_response, request, redirect, url_for, current_app
from flask_login import current_user

from app import app_bp
from app.api.routes import refresh_token


@app_bp.route("/")
@app_bp.route("/documents")
@app_bp.route("/documents/<doc_id>")
def index(doc_id=None):
    user = current_user

    searched_term = request.args.get('search', '')
    if doc_id is not None and searched_term != '':
        return redirect(url_for("app_bp.index", search=searched_term, docId=None))

    resp = make_response(render_template("documents/document_index.html", docId=doc_id, search=searched_term))
    return refresh_token(user, resp)


@app_bp.route("/users/login")
def login():
    user = current_user

    if user.is_authenticated:
        return redirect(url_for("app_bp.index"))

    login_template = current_app.user_manager.login_view()

    resp = make_response(render_template("documents/document_index.html", userTemplate=login_template))
    return refresh_token(user, resp)


@app_bp.route("/users/logout")
def logout():
    user = current_user
    if not user.is_authenticated:
        return redirect(url_for("app_bp.index"))
    current_app.user_manager.logout_view()
    return redirect(url_for('app_bp.index'))


@app_bp.route("/documentation")
def documentation():
    return render_template("docs/docs.html")


@app_bp.route("/about")
def about():
    return render_template("docs/about.html")

