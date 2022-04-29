class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :address, limit: 150, null: false
      t.references :requester, null: false
      t.references :assignee, null: false

      t.timestamps
    end

    add_foreign_key :orders, :users, column: :requester_id
    add_foreign_key :orders, :users, column: :assignee_id
    add_index :orders, [:requester_id, :assignee_id], unique: true
  end
end
