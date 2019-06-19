class RemovePublicFromEntries < ActiveRecord::Migration[5.2]
  def change
    remove_column :entries, :public, :boolean
  end
end
