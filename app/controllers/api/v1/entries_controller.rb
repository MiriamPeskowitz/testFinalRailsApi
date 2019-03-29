class Api::V1::EntriesController < ApplicationController
  

  def index
    render json: Entry.all
  end

  def create
    entry = entry.create(entruy_params)
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
    params.requre(:entry).permit(:id, :title, :content, :public)
  end 
end 