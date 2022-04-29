class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :address, limit: 150
      t.references :requester, null: false, foreign_key: true
      t.references :assignee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
