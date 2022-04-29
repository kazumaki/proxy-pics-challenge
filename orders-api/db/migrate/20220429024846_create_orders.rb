class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :address, limit: 150
      t.references :requester, null: false
      t.references :assignee, null: false
      t.string :status, limit: 20

      t.timestamps
    end

    add_foreign_key :orders, :users, column: :requester_id
    add_foreign_key :orders, :users, column: :assignee_id
  end
end
