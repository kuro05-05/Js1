
require "csv"

    puts "1(新規でメモを作成) 2(既存のメモ編集する)"

    memo_type = gets.to_i

 if memo_type == 1


   puts "新規でメモを記載します。拡張子を除いたファイル名を入力して下さい。"
   file_name = gets.chomp

   puts "メモ内容を記載してください。"
   puts "Ctrl+Dで保存します。"
   memo = STDIN.read

   CSV.open("#{file_name}.cvs", "w") do |csv|
   csv << memo

 end

 elsif
     memo_type == 2

     puts "既存のメモを編集します。各調子を除いた既存のファイル名を入力して下さい。"
     file_name = gets.chomp

     puts "編集したい内容を入力して下さい。完了したらCtrl+Dを押して下さい"
     memo = STDIN.read

     CSV.open("#{file_name}.csv", "a") do |csv|
     csv << memo
  end

 else
    puts "1か2を入力して下さい。"
 end
