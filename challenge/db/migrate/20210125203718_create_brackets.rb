class CreateBrackets < ActiveRecord::Migration[6.1]
  def change
    create_table :brackets do |t|
      t.decimal :min
      t.decimal :max
      t.decimal :tax

      t.timestamps
    end
  end
end
