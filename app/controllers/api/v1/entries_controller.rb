class Api::V1::EntriesController < ApplicationController
  

  def index
    render json: Entry.all
  end

  def create
    entry = Entry.create(entry_params)
    render json: entry
  end

  def destroy
    Entry.destroy(params[:id])
  end

  def update
    entry = Entry.find(params[:id])
    entry.update_attributes(entry_params)
    render json: entry
  end

  private
  def entry_params
    params.require(:entry).permit(:title, :content, :user_id)
  end 
end 
